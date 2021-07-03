import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit, ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import {ModalComponent} from '../../../shared/modal/modal.component';
import {ActionService} from '../../../core/services/action.service';
import * as _ from 'lodash';
import {AlertService} from '../../../shared/alert/alert.service';
import {AuthService} from '../../../core/services/auth.service';

declare var $: any;

@Component({
  selector: 'dashboard-component',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy, AfterContentChecked {
  @ViewChild('detailsModal') detailsModal: ModalComponent;
  @ViewChild('stopModal') stopModal: ModalComponent;
  @ViewChild('cancelModal') cancelModal: ModalComponent;
  @ViewChild('transactionsModal') transactionsModal: ModalComponent;
  public activeStrategies: any;
  public stopData: any;
  public checkMobileData: any;
  public searchFilter: any;
  public searchName: any;
  public searchDate: any;
  public searchState = 'all';
  public details = false;
  private clonedStrategy: any;
  public reloadStuff: any;
  public currentState: any;
  public strNumber: any;
  public selectAll = false;
  public executedTransaction = 0;
  public selectedBox = [{order: 0, nm: '0', st: '0'}];
  public loaded = false;
  public selecteFilter = [];

  constructor(private actionService: ActionService,
              private alertService: AlertService,
              private cdFref: ChangeDetectorRef,
              private authService: AuthService) {
    this.loadActiveStrategy();

  }

  ngOnInit() {
    this.reloadStuff = setInterval(() => {
      this.reload();
    }, 20000);

  }

  ngAfterContentChecked() {
    this.calculateTotalTransactions();
    this.cdFref.detectChanges();
  }

  ngOnDestroy() {
    clearInterval(this.reloadStuff);
  }

  reload() {
    this.resetFilter();
    this.loadActiveStrategy();
    this.executedTransaction = 0;
    this.calculateTotalTransactions();
  }

  manageAll(event: any) {
    if (event === true) {
      _.forEach(this.activeStrategies, (o) => {
        this.selectedBox.push({order: o.orderId, nm: o.name, st: o.status});
      });
      $('.check-dash').prop('checked', true);
    } else {
      this.selectedBox = [{order: 0, nm: '0', st: '0'}];
      $('.check-dash').prop('checked', false);
    }
  }

  updateSelectStatus(event: any, orderId: any, name: any, status: any) {
    if (event.target.checked === true) {
      this.selectedBox.push({order: orderId, nm: name, st: status});
    } else {
      this.selectedBox = _.remove(this.selectedBox, (n) => {
        return n.order !== orderId;
      });
    }

  }

  getFloor(value: any) {
    return Math.floor(value);
  }

  calculateCurrentCapital(capital: any, sellPrice: any, currentCapital: any, buyPrice: any, status: any) {
    const parseSellPrice = sellPrice.toFixed(8);
    const parseBuyPrice = buyPrice.toFixed(8);
    const ccS = parseFloat((currentCapital * parseSellPrice).toFixed(8));
    const ccB = parseFloat((currentCapital * parseBuyPrice).toFixed(8));

    switch (status) {
      case'BUY':
        if (Math.floor(ccB) === 0) {
          return capital;
        }
        return ccB;
        break;
      case'SELL':
        return ccS;
        break;
      default:
        return capital;
    }


  }

  calculateTransactions(status: any, transactions: any, length: any) {
    const lastTransaction = transactions[length - 1];
    const type = lastTransaction && lastTransaction.type_transaction ? lastTransaction.type_transaction : 'BUY';
    let result = length % 2 === 0 ? length / 2 : this.getFloor(length / 2);
    if (length >= 3) {
      if (type === 'SELL' && status === 'ACTIVE') {
        result = result - 1;
      }
    } else {
      if (type === 'SELL' && status === 'ACTIVE') {
        result = result - 1;
      }
    }
    return result;
  }

  calculateTotalTransactions() {
    let partial = 0;
    _.forEach(this.activeStrategies, (str) => {
      const lastTransaction = str.transactions[str.transactions.length - 1];
      const type = lastTransaction && lastTransaction.type_transaction ? lastTransaction.type_transaction : 'BUY';
      let result = str.transactions.length % 2 === 0 ? str.transactions.length / 2 : this.getFloor(str.transactions.length / 2);
      if (str.transactions.length >= 3) {
        if (type === 'SELL' && str.status === 'ACTIVE') {
          result = result - 1;
        }
      } else {
        if (type === 'SELL' && str.status === 'ACTIVE') {
          result = result - 1;
        }
      }
      partial += result;
    });
    this.executedTransaction = partial;
    this.loaded = true;
  }

  getCeil(value: any) {
    return Math.ceil(value);
  }

  closeStop() {
    this.stopModal.dismiss();
  }

  closeCancel() {
    this.cancelModal.dismiss();
  }

  closeTransaction() {
    this.transactionsModal.dismiss();
  }

  openConfirmModal(id) {
    this.checkMobileData = this.activeStrategies[id];
    this.detailsModal.show('modal-lg');
  }

  openStopModal() {
    this.closeTransaction();
    this.stopModal.show('modal-lg');
  }

  openCancelModal() {
    this.closeTransaction();
    this.cancelModal.show('modal-lg');
  }

  fromCoinToBTC(amount: any, value: any) {
    return amount * value;
  }

  loadActiveStrategy() {
    this.actionService.getActiveStrategy().subscribe((resp) => {
      this.clonedStrategy = _.cloneDeep(resp);
      this.activeStrategies = _.orderBy(this.clonedStrategy, 'name', 'asc');
      if (this.stopData === undefined) {
        this.stopData = resp[0];
      }
      this.checkMobileData = resp[0];
      this.strNumber = this.clonedStrategy.length;
      _.forEach(this.selecteFilter, (sf) => {
        if (sf.name !== 'all' && sf.name !== '') {
          this.filterResult(sf.name, sf.type);
        }
      });
    });
  }

  getSpecificStatus(orderId: any, pair: any) {
    this.actionService.getCurrentStatus(orderId, pair).subscribe((resp) => {
      if (_.isEmpty(resp)) {
        this.alertService.addMessage('info', 'Stato dell ordine chiuso bilancio insufficente');
      } else {
        const state = resp.status === 'NEW' ? 'APERTO' : 'CHIUSO';
        this.alertService.addMessage('info', 'Stato dell ordine: ' + state);
      }
      return resp;
    });
  }

  cancelStrategy(orderId: number, pair: string, name: string) {
    if (orderId !== undefined) {

      this.actionService.stopStrategy(orderId, pair).subscribe((resp) => {
        this.actionService.deleteFromDb(name).subscribe(() => {
          this.closeCancel();
          this.loadActiveStrategy();
          this.actionService.getBtcBalance().subscribe();
          this.calculateTotalTransactions();
          this.alertService.addMessage('success', 'Ordine cancellato con successo');
        });
      });
    } else {
      this.closeCancel();
      this.alertService.addMessage('danger', 'Ordine nn ancora aperto riprova fra poco');
    }
  }

  updateStrategy(name: string, status: string) {

    const payload = {
      status: status === 'ACTIVE' ? 'STOP' : 'ACTIVE',
    };
    this.actionService.updateStrategy(name, payload).subscribe((resp) => {
      this.closeStop();
      this.loadActiveStrategy();
      this.calculateTotalTransactions();
    });
  }

  filterResult(name: string, type: string) {
    this.loaded = false;
    let data;

    if (type === 'pairs') {
      this.searchName = '';
      this.searchDate = '';
      this.searchState = 'all';
      if (this.searchFilter !== undefined) {
        data = _.filter(this.clonedStrategy, (o) => {
          return o.coin_pair.includes(name.toUpperCase());
        });
      } else {
        data = this.clonedStrategy;
      }
    } else if (type === 'name') {
      this.searchFilter = '';
      this.searchDate = '';
      this.searchState = 'all';
      if (this.searchName !== undefined) {
        data = _.filter(this.clonedStrategy, (o) => {
          return o.name.includes(name.toUpperCase());
        });
      } else {
        data = this.clonedStrategy;
      }
    } else if (type === 'date') {
      this.searchFilter = '';
      this.searchName = '';
      this.searchState = 'all';
      if (this.searchDate !== undefined) {
        data = _.filter(this.clonedStrategy, (o) => {
          return o.date.includes(name);
        });
      } else {
        data = this.clonedStrategy;
      }
    } else if (type === 'state') {
      this.searchFilter = '';
      this.searchName = '';
      this.searchDate = '';
      const nameUp = name.toUpperCase();

      if (this.searchState !== undefined && name !== 'all') {
        data = _.filter(this.clonedStrategy, (o) => {
          return o.current_status === nameUp;
        });
      } else {
        data = this.clonedStrategy;
      }
    }
    this.activeStrategies = _.orderBy(data, 'name', 'asc');
    this.loaded = true;

  }

  openDetails(data: any) {
    // $('.showD').click(() => {
    this.stopData = this.activeStrategies[data];
    this.transactionsModal.show('modal-lg');
    // });
  }

  calculateCapital(start: boolean) {
    let startCapital = 0;
    let currentCapital = 0;

    if (start) {
      _.forEach(this.activeStrategies, (str) => {
        if (str.transactions[0] && str.transactions[0].cumulative_quantity) {
          startCapital += str.transactions[0].cumulative_quantity;
        } else {
          startCapital += str.capital;
        }
      });
      return startCapital.toFixed(8);

    } else {
      _.forEach(this.activeStrategies, (str) => {
        currentCapital += this.calculateCurrentCapital(str.capital, str.sell_price, str.current_capital, str.buy_price, str.current_status)
      });
      return currentCapital.toFixed(8);
    }
  }

  parseDate(date: any) {
    const data = new Date(date);
    // tslint:disable-next-line:max-line-length
    return data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear() + ' - ' + (data.getHours() < 10 ? '0' + data.getHours() : data.getHours()) + ':' + (data.getMinutes() < 10 ? '0' + data.getMinutes() : data.getMinutes());
  }

  resetFilter() {
    const result = [];
    this.searchFilter = _.isEmpty(this.searchFilter) ? '' : this.searchFilter;
    result.push({name: this.searchFilter, type: 'pairs'});
    this.searchState = this.searchState === 'all' ? 'all' : this.searchState;
    result.push({name: this.searchState, type: 'state'});
    this.searchName = _.isEmpty(this.searchName) ? '' : this.searchName;
    result.push({name: this.searchName, type: 'name'});
    // this.searchDate = _.isEmpty(this.searchDate) ? '' : this.searchDate;
    this.selecteFilter = result;

  }
}


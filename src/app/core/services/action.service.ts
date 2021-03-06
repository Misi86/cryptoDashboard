import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {AlertService} from "../../shared/alert/alert.service";


@Injectable({
  providedIn: 'root'
})

export class ActionService {
  private _active;
  private _btcBalance;

  constructor(private http: HttpClient,
              private alertService: AlertService) {
  }


  getAllPairs() {
    return this.http.get<any>('api/btcprice/all').pipe(map(resp => {
      return resp;
    }));
  }

  getSpecificPairs(pair: any) {
    return this.http.get<any>('api/btcprice/' + pair).pipe(map(resp => {
      return resp;
    }));
  }

  setStrategy(payload: any) {
    return this.http.post<any>('api/strategy/' + payload.name, payload).pipe(map(data => {
      return data;
    }));
  }

  setStrategies(payload: any) {
    return this.http.post<any>('api/strategies', payload).pipe(map(data => {
      return data;
    }));
  }

  getActiveStrategy() {
    return this.http.get<any>('api/strategy/all').pipe(map(data => {
      return data;
    }));
  }

  stopStrategy(orderId: number, pair: string) {
    return this.http.get<any>('api/binance/cancelorder/single/' + orderId + '/' + pair).pipe(map(data => {
      return data;
    }));
  }

  deleteFromDb(name: string) {
    return this.http.delete<any>('api/strategy/' + name).pipe(map(data => {
      return data;
    }));
  }

  multipleCancel(payload: any) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: payload,
    };
    return this.http.delete<any>('api/strategy/deletestrategies' , options).pipe(map(data => {
      return data;
    }));
  }

  multipleUpdate(payload: any) {
    return this.http.put<any>('api/strategy/updatestrategies' , payload).pipe(map(data => {
      return data;
    }));
  }

  updateStrategy(name: string, payload: any) {
    return this.http.post<any>('api/strategy/' + name, payload).pipe(map(data => {
      return data;
    }));
  }

  getBtcBalance() {
    return this.http.get<any>('api/binance/balance').pipe(map(data => {
      this.balanceBtc = data.btc_balance;
      return this.balanceBtc;
    }));
  }

  getCurrentStatus(orderId: any, pair: any) {
    return this.http.get<any>('api/binance/orderstatus/' + orderId + '/' + pair).pipe(map(data => {
      return JSON.parse(data.success);
    }));
  }

  updatePassword(name: string, pw: string) {
    const payload = {
      username: name,
      password: pw,
      role: 'admin'
    };
    return this.http.post<any>('api/users/' + name, payload).pipe(map(data => {
      this.alertService.addMessage('success', 'Password cambiata correttamente')
      return data;
    }));
  }


  checkStrategy(name: any) {
    return this.http.get<any>('api/strategy/' + name).pipe(map(data => {
      return data;
    }));
  }

  set balanceBtc(value: number) {
    this._btcBalance = value;
  }

  get balanceBtc(): number {
    return this._btcBalance;
  }
}


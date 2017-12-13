import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'Rxjs';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TaskService {
  data: BehaviorSubject<any[]> = new BehaviorSubject([1, 2, 3]);

  constructor(private _http: HttpClient) { }

  updateData(newData: any): void {
    const tempData = this.data.getValue();
    tempData.push(newData);
    this.data.next(newData);
  }

}

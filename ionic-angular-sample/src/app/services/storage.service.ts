import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }

  //set key -value

  async set(key: string, value: any): Promise<any>{
    try{
      var result = await this.storage.set(key, value);
      return true;

    }catch(e){
      console.log(e);
      return false;

    }

  }

  //get value
  async get(key: string): Promise<any>{
    try{
      var result = await this.storage.get(key);
      return result;

    }catch(e){
      console.log(e);
      return null;

    }

  }

  // set a key/value object
async setObject(key: string, object: Object) {
  try {
  const result = await this.storage.set(key, JSON.stringify(object));
  console.log('set Object in storage: ' + result);
  return true;
  } catch (reason) {
  console.log(reason);
  return false;
  }
  }
  // get a key/value object
async getObject<T>(key: string): Promise<T> {
  try {
  const result = await this.storage.get(key);
  if (result != null) {
  return JSON.parse(result);
  }
  return null;
  } catch (reason) {
  console.log(reason);
  return null;
  }
  }
  // remove a single key value:
  remove(key: string) {
  this.storage.remove(key);
  }
  //  delete all data from your application:
  clear()
  {
  this.storage.clear();
  }
}

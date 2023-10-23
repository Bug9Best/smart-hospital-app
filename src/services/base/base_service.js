import { environment } from '../../environment/environment'
import { useState, useEffect } from 'react';
import axios from 'axios';

class BaseService {
  baseUrl = environment.BaseURL;
  path = '_blank';

  constructor(path) {
    this.path = path;
  }

  get BaseURL() {
    return this.baseUrl + this.path;
  }

  create(data) {
    return this.axios.post(this.BaseURL, data)
      .then((response) => {
        this.item = response.data;
        this.item$.next(this.item);
        return response.data;
      })
      .catch((error) => {
        console.error('Error creating item:', error);
        throw error;
      })
      .finally(() => {
        this.loading = false;
        this.loading$.next(this.loading);
      });
  }

  get(options) {
    return console.log(this.BaseURL);
    return this.client.get(this.baseUrl, {
      params: this.options('get', options)
    })
      .then((response) => {
        this.items = response.data;
        this.items$.next(this.items);
        return response.data;
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        throw error;
      });
  }

  show(id) {
    return this.client.get(this.baseUrl + '/' + id.toString())
      .then((response) => {
        this.item = response.data;
        this.item$.next(this.item);
        return response.data;
      })
      .catch((error) => {
        console.error('Error fetching item:', error);
        throw error;
      });
  }

  update(item) {
    if (item.id) {
      return this.client.put(this.baseUrl + '/' + item.id.toString(), item)
        .then((response) => {
          this.item = response.data;
          this.item$.next(this.item);
          return response.data;
        })
        .catch((error) => {
          console.error('Error updating item:', error);
          throw error;
        });
    } else {
      console.error(`[${this.path}] Required model with [id]`);
      return new Promise((resolve) => {
        resolve(null);
      });
    }
  }

  delete(id) {
    return this.remove(id);
  }
}

export default BaseService;

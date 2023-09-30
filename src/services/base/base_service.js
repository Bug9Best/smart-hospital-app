import { useState, useEffect } from 'react';
import axios from 'axios';

class BaseService {
  baseUrl = '/api';
  path = '_blank';

  constructor(path) {
    this.path = path;
  }

  create(item) {
    return this.axios.post(this.baseUrl + this.path, item)
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
    // return this.client.post(this.baseUrl, item)
    //   .then((response) => {
    //     this.item = response.data;
    //     this.item$.next(this.item);
    //     return response.data;
    //   })
    //   .catch((error) => {
    //     console.error('Error creating item:', error);
    //     throw error;
    //   });
  }

  get(options) {
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

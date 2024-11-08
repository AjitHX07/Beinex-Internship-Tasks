import { Injectable } from '@angular/core';
import { ActivateGuard } from '@angular/ActivateGuard';

@Injectable({
  providedIn: 'root'
})
export default class GuardsService implements ActivateGuard {

  constructor() { }
}

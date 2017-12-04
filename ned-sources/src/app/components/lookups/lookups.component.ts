import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lookups',
  templateUrl: './lookups.component.html',
  styleUrls: ['./lookups.component.css']
})
export class LookupsComponent{
}

export interface Country {
  id: string;
  name: string;
  tag: string;
  abbrev: string;
  isoAlpha2Code: string;
  isoAlpha3Code: string;
  sequence: string;
}

export interface Dma {
  id: string;
  name: string;
  tag: string;
}

export interface Affiliation {
  id: string;
  name: string;
  tag: string;
}

export interface RelationshipType {
  id: string;
  name: string;
  tag: string;
}

export interface SourceType {
  id: string;
  name: string;
  tag: string;
}


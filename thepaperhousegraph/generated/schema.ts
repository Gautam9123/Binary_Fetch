

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal,
} from "@graphprotocol/graph-ts";

export class Paper extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Paper entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Paper entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Paper", id.toString(), this);
  }

  static load(id: string): Paper | null {
    return store.get("Paper", id) as Paper | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get paperId(): string {
    let value = this.get("paperId");
    return value.toString();
  }

  set paperId(value: string) {
    this.set("paperId", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get author(): string {
    let value = this.get("author");
    return value.toString();
  }

  set author(value: string) {
    this.set("author", Value.fromString(value));
  }

  get tokenUri(): string {
    let value = this.get("tokenUri");
    return value.toString();
  }

  set tokenUri(value: string) {
    this.set("tokenUri", Value.fromString(value));
  }

  get allowFunding(): string {
    let value = this.get("allowFunding");
    return value.toString();
  }

  set allowFunding(value: string) {
    this.set("allowFunding", Value.fromString(value));
  }

  get fundAmount(): string {
    let value = this.get("fundAmount");
    return value.toString();
  }

  set fundAmount(value: string) {
    this.set("fundAmount", Value.fromString(value));
  }

  get totalAmountFunded(): string {
    let value = this.get("totalAmountFunded");
    return value.toString();
  }

  set totalAmountFunded(value: string) {
    this.set("totalAmountFunded", Value.fromString(value));
  }
}

export class PaperFunding extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save PaperFunding entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save PaperFunding entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("PaperFunding", id.toString(), this);
  }

  static load(id: string): PaperFunding | null {
    return store.get("PaperFunding", id) as PaperFunding | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get amount(): string {
    let value = this.get("amount");
    return value.toString();
  }

  set amount(value: string) {
    this.set("amount", Value.fromString(value));
  }

  get paperid(): string {
    let value = this.get("paperid");
    return value.toString();
  }

  set paperid(value: string) {
    this.set("paperid", Value.fromString(value));
  }

  get tokenUri(): string {
    let value = this.get("tokenUri");
    return value.toString();
  }

  set tokenUri(value: string) {
    this.set("tokenUri", Value.fromString(value));
  }
}


function assert(arg0: boolean, arg1: string) {
  throw new Error("Function not implemented.");
}

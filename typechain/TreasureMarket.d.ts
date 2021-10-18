/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface TreasureMarketInterface extends ethers.utils.Interface {
  functions: {
    "cancelSale(uint256)": FunctionFragment;
    "endTime(uint256)": FunctionFragment;
    "feePercentagePoint()": FunctionFragment;
    "gasLessRateLimit()": FunctionFragment;
    "initialize(uint256,address,address,uint256,uint256)": FunctionFragment;
    "instantBuy(uint256)": FunctionFragment;
    "isForSaleById(uint256)": FunctionFragment;
    "isTrustedForwarder(address)": FunctionFragment;
    "listItem(uint256,uint256,uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "ownerWithdrawFees(address,uint256)": FunctionFragment;
    "paused()": FunctionFragment;
    "priceById(uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "royaltyPercentagePoint()": FunctionFragment;
    "seller(uint256)": FunctionFragment;
    "setFee(uint256)": FunctionFragment;
    "setRoyalty(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "upgradeTo(address)": FunctionFragment;
    "upgradeToAndCall(address,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "cancelSale",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "endTime",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "feePercentagePoint",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "gasLessRateLimit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [BigNumberish, string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "instantBuy",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isForSaleById",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isTrustedForwarder",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "listItem",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ownerWithdrawFees",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "priceById",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "royaltyPercentagePoint",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "seller",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setRoyalty",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "upgradeTo", values: [string]): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [string, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "cancelSale", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "endTime", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "feePercentagePoint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "gasLessRateLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "instantBuy", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isForSaleById",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isTrustedForwarder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "listItem", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ownerWithdrawFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "priceById", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "royaltyPercentagePoint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "seller", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setRoyalty", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;

  events: {
    "AdminChanged(address,address)": EventFragment;
    "BeaconUpgraded(address)": EventFragment;
    "CancelSale(address,uint256)": EventFragment;
    "FeeSet(uint256)": EventFragment;
    "FeesWithdrawn(address,address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "RoyaltySet(uint256)": EventFragment;
    "SaleComplete(address,uint256,address)": EventFragment;
    "StartSale(address,uint256,uint256)": EventFragment;
    "Unpaused(address)": EventFragment;
    "Upgraded(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CancelSale"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FeeSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FeesWithdrawn"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoyaltySet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SaleComplete"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StartSale"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}

export type AdminChangedEvent = TypedEvent<
  [string, string] & { previousAdmin: string; newAdmin: string }
>;

export type BeaconUpgradedEvent = TypedEvent<[string] & { beacon: string }>;

export type CancelSaleEvent = TypedEvent<
  [string, BigNumber] & { _seller: string; _id: BigNumber }
>;

export type FeeSetEvent = TypedEvent<[BigNumber] & { _fee: BigNumber }>;

export type FeesWithdrawnEvent = TypedEvent<
  [string, string, BigNumber] & {
    _caller: string;
    _to: string;
    _amount: BigNumber;
  }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type PausedEvent = TypedEvent<[string] & { account: string }>;

export type RoyaltySetEvent = TypedEvent<[BigNumber] & { _royalty: BigNumber }>;

export type SaleCompleteEvent = TypedEvent<
  [string, BigNumber, string] & {
    _seller: string;
    _id: BigNumber;
    _buyer: string;
  }
>;

export type StartSaleEvent = TypedEvent<
  [string, BigNumber, BigNumber] & {
    _seller: string;
    _id: BigNumber;
    _price: BigNumber;
  }
>;

export type UnpausedEvent = TypedEvent<[string] & { account: string }>;

export type UpgradedEvent = TypedEvent<[string] & { implementation: string }>;

export class TreasureMarket extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: TreasureMarketInterface;

  functions: {
    cancelSale(
      _id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    endTime(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    feePercentagePoint(overrides?: CallOverrides): Promise<[BigNumber]>;

    gasLessRateLimit(overrides?: CallOverrides): Promise<[BigNumber]>;

    initialize(
      _gasLessRateLimit: BigNumberish,
      _treasureDeployedAddress: string,
      _forwarder: string,
      _feePercentagePoint: BigNumberish,
      _royaltyPercentagePoint: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    instantBuy(
      _id: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isForSaleById(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isTrustedForwarder(
      forwarder: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    listItem(
      _id: BigNumberish,
      price: BigNumberish,
      duration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    ownerWithdrawFees(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    priceById(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    royaltyPercentagePoint(overrides?: CallOverrides): Promise<[BigNumber]>;

    seller(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    setFee(
      _points: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setRoyalty(
      _points: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  cancelSale(
    _id: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  endTime(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  feePercentagePoint(overrides?: CallOverrides): Promise<BigNumber>;

  gasLessRateLimit(overrides?: CallOverrides): Promise<BigNumber>;

  initialize(
    _gasLessRateLimit: BigNumberish,
    _treasureDeployedAddress: string,
    _forwarder: string,
    _feePercentagePoint: BigNumberish,
    _royaltyPercentagePoint: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  instantBuy(
    _id: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isForSaleById(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isTrustedForwarder(
    forwarder: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  listItem(
    _id: BigNumberish,
    price: BigNumberish,
    duration: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  ownerWithdrawFees(
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  priceById(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  royaltyPercentagePoint(overrides?: CallOverrides): Promise<BigNumber>;

  seller(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  setFee(
    _points: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setRoyalty(
    _points: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  upgradeTo(
    newImplementation: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  upgradeToAndCall(
    newImplementation: string,
    data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    cancelSale(_id: BigNumberish, overrides?: CallOverrides): Promise<void>;

    endTime(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    feePercentagePoint(overrides?: CallOverrides): Promise<BigNumber>;

    gasLessRateLimit(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _gasLessRateLimit: BigNumberish,
      _treasureDeployedAddress: string,
      _forwarder: string,
      _feePercentagePoint: BigNumberish,
      _royaltyPercentagePoint: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    instantBuy(_id: BigNumberish, overrides?: CallOverrides): Promise<void>;

    isForSaleById(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isTrustedForwarder(
      forwarder: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    listItem(
      _id: BigNumberish,
      price: BigNumberish,
      duration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    ownerWithdrawFees(
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    priceById(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    royaltyPercentagePoint(overrides?: CallOverrides): Promise<BigNumber>;

    seller(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    setFee(_points: BigNumberish, overrides?: CallOverrides): Promise<void>;

    setRoyalty(_points: BigNumberish, overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeTo(
      newImplementation: string,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AdminChanged(address,address)"(
      previousAdmin?: null,
      newAdmin?: null
    ): TypedEventFilter<
      [string, string],
      { previousAdmin: string; newAdmin: string }
    >;

    AdminChanged(
      previousAdmin?: null,
      newAdmin?: null
    ): TypedEventFilter<
      [string, string],
      { previousAdmin: string; newAdmin: string }
    >;

    "BeaconUpgraded(address)"(
      beacon?: string | null
    ): TypedEventFilter<[string], { beacon: string }>;

    BeaconUpgraded(
      beacon?: string | null
    ): TypedEventFilter<[string], { beacon: string }>;

    "CancelSale(address,uint256)"(
      _seller?: null,
      _id?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { _seller: string; _id: BigNumber }
    >;

    CancelSale(
      _seller?: null,
      _id?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { _seller: string; _id: BigNumber }
    >;

    "FeeSet(uint256)"(
      _fee?: null
    ): TypedEventFilter<[BigNumber], { _fee: BigNumber }>;

    FeeSet(_fee?: null): TypedEventFilter<[BigNumber], { _fee: BigNumber }>;

    "FeesWithdrawn(address,address,uint256)"(
      _caller?: null,
      _to?: null,
      _amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { _caller: string; _to: string; _amount: BigNumber }
    >;

    FeesWithdrawn(
      _caller?: null,
      _to?: null,
      _amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { _caller: string; _to: string; _amount: BigNumber }
    >;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "Paused(address)"(
      account?: null
    ): TypedEventFilter<[string], { account: string }>;

    Paused(account?: null): TypedEventFilter<[string], { account: string }>;

    "RoyaltySet(uint256)"(
      _royalty?: null
    ): TypedEventFilter<[BigNumber], { _royalty: BigNumber }>;

    RoyaltySet(
      _royalty?: null
    ): TypedEventFilter<[BigNumber], { _royalty: BigNumber }>;

    "SaleComplete(address,uint256,address)"(
      _seller?: null,
      _id?: null,
      _buyer?: null
    ): TypedEventFilter<
      [string, BigNumber, string],
      { _seller: string; _id: BigNumber; _buyer: string }
    >;

    SaleComplete(
      _seller?: null,
      _id?: null,
      _buyer?: null
    ): TypedEventFilter<
      [string, BigNumber, string],
      { _seller: string; _id: BigNumber; _buyer: string }
    >;

    "StartSale(address,uint256,uint256)"(
      _seller?: null,
      _id?: null,
      _price?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { _seller: string; _id: BigNumber; _price: BigNumber }
    >;

    StartSale(
      _seller?: null,
      _id?: null,
      _price?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { _seller: string; _id: BigNumber; _price: BigNumber }
    >;

    "Unpaused(address)"(
      account?: null
    ): TypedEventFilter<[string], { account: string }>;

    Unpaused(account?: null): TypedEventFilter<[string], { account: string }>;

    "Upgraded(address)"(
      implementation?: string | null
    ): TypedEventFilter<[string], { implementation: string }>;

    Upgraded(
      implementation?: string | null
    ): TypedEventFilter<[string], { implementation: string }>;
  };

  estimateGas: {
    cancelSale(
      _id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    endTime(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    feePercentagePoint(overrides?: CallOverrides): Promise<BigNumber>;

    gasLessRateLimit(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _gasLessRateLimit: BigNumberish,
      _treasureDeployedAddress: string,
      _forwarder: string,
      _feePercentagePoint: BigNumberish,
      _royaltyPercentagePoint: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    instantBuy(
      _id: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isForSaleById(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isTrustedForwarder(
      forwarder: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    listItem(
      _id: BigNumberish,
      price: BigNumberish,
      duration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    ownerWithdrawFees(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    priceById(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    royaltyPercentagePoint(overrides?: CallOverrides): Promise<BigNumber>;

    seller(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    setFee(
      _points: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setRoyalty(
      _points: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    cancelSale(
      _id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    endTime(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    feePercentagePoint(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    gasLessRateLimit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _gasLessRateLimit: BigNumberish,
      _treasureDeployedAddress: string,
      _forwarder: string,
      _feePercentagePoint: BigNumberish,
      _royaltyPercentagePoint: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    instantBuy(
      _id: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isForSaleById(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isTrustedForwarder(
      forwarder: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    listItem(
      _id: BigNumberish,
      price: BigNumberish,
      duration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ownerWithdrawFees(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    priceById(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    royaltyPercentagePoint(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    seller(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setFee(
      _points: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setRoyalty(
      _points: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

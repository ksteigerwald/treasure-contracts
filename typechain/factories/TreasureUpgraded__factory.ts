/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TreasureUpgraded,
  TreasureUpgradedInterface,
} from "../TreasureUpgraded";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "addedBy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "addedBy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "ChangeNewId",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "uri",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "movesHash",
        type: "bytes32",
      },
    ],
    name: "GameMinted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Received",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "RescuedERC20",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "RescuedEther",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
    ],
    name: "addAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "games",
    outputs: [
      {
        internalType: "bytes32",
        name: "movesHash",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "level",
        type: "uint8",
      },
      {
        internalType: "uint16",
        name: "achievement1",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "achievement2",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "achievement3",
        type: "uint16",
      },
      {
        internalType: "bool",
        name: "color",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getOriginalPlayer",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalGames",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
    ],
    name: "hackSetAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "player",
        type: "address",
      },
      {
        internalType: "string",
        name: "_tokenURI",
        type: "string",
      },
      {
        internalType: "bytes32",
        name: "_moveHash",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "_level",
        type: "uint8",
      },
      {
        internalType: "uint16",
        name: "_achievement1",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "_achievement2",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "_achievement3",
        type: "uint16",
      },
      {
        internalType: "bool",
        name: "_color",
        type: "bool",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "movesHashToId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "newId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "originalPlayers",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
    ],
    name: "removeAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "rescueEtherOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "setNewId",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60a06040523060601b60805234801561001757600080fd5b5060805160601c612c4661004b60003960008181610cd901528181610d1901528181610e1e0152610e5e0152612c466000f3fe6080604052600436106101dc5760003560e01c80634f1ef286116101025780638129fc1c11610095578063b88d4fde11610064578063b88d4fde1461063c578063c87b56dd1461065c578063e985e9c51461067c578063f2fde38b146106c55761021b565b80638129fc1c146105d35780638da5cb5b146105e857806395d89b4114610607578063a22cb4651461061c5761021b565b80636352211e116100d15780636352211e1461055e578063704802751461057e57806370a082311461059e578063715018a6146105be5761021b565b80634f1ef286146104ff5780635bd4349b146105125780635c956fb91461052757806360ccbd131461053e5761021b565b80631c78b68f1161017a5780633659cfe6116101495780633659cfe61461046857806342842e0e1461048857806345314093146104a857806346733d64146104df5761021b565b80631c78b68f146103d157806323b872dd146103f15780633094ef201461041157806331118271146104315761021b565b8063095ea7b3116101b6578063095ea7b3146102af578063117a5b90146102d15780631785f53c146103755780631c08e0d3146103955761021b565b806301ffc9a71461022057806306fdde0314610255578063081812fc146102775761021b565b3661021b57604080513381523460208201527f88a5966d370b9919b20f3e2c13ff65706f196a4e32cc2c12bf57088f88525874910160405180910390a1005b600080fd5b34801561022c57600080fd5b5061024061023b3660046127ae565b6106e5565b60405190151581526020015b60405180910390f35b34801561026157600080fd5b5061026a610739565b60405161024c91906128d2565b34801561028357600080fd5b50610297610292366004612796565b6107cb565b6040516001600160a01b03909116815260200161024c565b3480156102bb57600080fd5b506102cf6102ca366004612784565b610858565b005b3480156102dd57600080fd5b5061033a6102ec366004612796565b610161602052600090815260409020805460019091015460ff8082169161ffff6101008204811692630100000083048216926501000000000081049092169167010000000000000090041686565b6040805196875260ff909516602087015261ffff938416948601949094529082166060850152166080830152151560a082015260c00161024c565b34801561038157600080fd5b506102cf610390366004612514565b61096e565b3480156103a157600080fd5b506103c36103b0366004612796565b6101636020526000908152604090205481565b60405190815260200161024c565b3480156103dd57600080fd5b506102cf6103ec366004612514565b6109f9565b3480156103fd57600080fd5b506102cf61040c366004612593565b610a55565b34801561041d57600080fd5b506103c361042c3660046126bf565b610a86565b34801561043d57600080fd5b5061029761044c366004612796565b610162602052600090815260409020546001600160a01b031681565b34801561047457600080fd5b506102cf610483366004612514565b610cce565b34801561049457600080fd5b506102cf6104a3366004612593565b610d97565b3480156104b457600080fd5b506102976104c3366004612796565b600090815261016260205260409020546001600160a01b031690565b3480156104eb57600080fd5b506102cf6104fa366004612796565b610db2565b6102cf61050d366004612671565b610e13565b34801561051e57600080fd5b506103c3610ecd565b34801561053357600080fd5b506103c36101645481565b34801561054a57600080fd5b506102cf610559366004612530565b610ede565b34801561056a57600080fd5b50610297610579366004612796565b610fbf565b34801561058a57600080fd5b506102cf610599366004612514565b611036565b3480156105aa57600080fd5b506103c36105b9366004612514565b611061565b3480156105ca57600080fd5b506102cf6110e8565b3480156105df57600080fd5b506102cf61111f565b3480156105f457600080fd5b5061012d546001600160a01b0316610297565b34801561061357600080fd5b5061026a611203565b34801561062857600080fd5b506102cf61063736600461263d565b611212565b34801561064857600080fd5b506102cf6106573660046125d3565b6112e4565b34801561066857600080fd5b5061026a610677366004612796565b61131c565b34801561068857600080fd5b5061024061069736600461255b565b6001600160a01b039182166000908152606a6020908152604080832093909416825291909152205460ff1690565b3480156106d157600080fd5b506102cf6106e0366004612514565b611327565b60006001600160e01b031982166380ac58cd60e01b148061071657506001600160e01b03198216635b5e139f60e01b145b8061073157506301ffc9a760e01b6001600160e01b03198316145b90505b919050565b60606065805461074890612b12565b80601f016020809104026020016040519081016040528092919081815260200182805461077490612b12565b80156107c15780601f10610796576101008083540402835291602001916107c1565b820191906000526020600020905b8154815290600101906020018083116107a457829003601f168201915b5050505050905090565b60006107d6826113c0565b61083c5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152606960205260409020546001600160a01b031690565b600061086382610fbf565b9050806001600160a01b0316836001600160a01b031614156108d15760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608401610833565b336001600160a01b03821614806108ed57506108ed8133610697565b61095f5760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c00000000000000006064820152608401610833565b61096983836113dd565b505050565b61012d546001600160a01b031633146109995760405162461bcd60e51b815260040161083390612a1d565b6001600160a01b03811660008181526101606020908152604091829020805460ff191690558151338152908101929092527fdb9d5d31320daf5bc7181d565b6da4d12e30f0f4d5aa324a992426c14a1d19ce91015b60405180910390a150565b6001600160a01b03811660008181526101606020908152604091829020805460ff191660011790558151338152908101929092527fbf3f493c772c8c283fd124432c2d0f539ab343faa04258fe88e52912d36b102b91016109ee565b610a5f338261144b565b610a7b5760405162461bcd60e51b815260040161083390612a52565b610969838383611535565b336000908152610160602052604081205460ff16610af25760405162461bcd60e51b815260206004820152602360248201527f4f6e6c792061646d696e732063616e2063616c6c20746869732066756e63746960448201526237b71760e91b6064820152608401610833565b610b0161015f80546001019055565b6000610b0d61015f5490565b9050610b198a826116d5565b610b23818a611808565b60006040518060c001604052808a81526020018960ff1681526020018861ffff1681526020018761ffff1681526020018661ffff16815260200185151581525090508061016160008481526020019081526020016000206000820151816000015560208201518160010160006101000a81548160ff021916908360ff16021790555060408201518160010160016101000a81548161ffff021916908361ffff16021790555060608201518160010160036101000a81548161ffff021916908361ffff16021790555060808201518160010160056101000a81548161ffff021916908361ffff16021790555060a08201518160010160076101000a81548160ff0219169083151502179055509050508a610162600084815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b031602179055508161016360008b8152602001908152602001600020819055507f106687a5763ca3a7dc8103c314927515b5a78bb3523d14a54b213bb47b39c6bf8b838c8c604051610cb8949392919061289a565b60405180910390a1509998505050505050505050565b306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161415610d175760405162461bcd60e51b815260040161083390612937565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610d49611893565b6001600160a01b031614610d6f5760405162461bcd60e51b815260040161083390612983565b610d78816118c1565b60408051600080825260208201909252610d94918391906118ec565b50565b610969838383604051806020016040528060008152506112e4565b61012d546001600160a01b03163314610ddd5760405162461bcd60e51b815260040161083390612a1d565b6101648190556040518181527f220ec5a0a019687835ed4538d7753fcb40107f41eef171f4c2c714670ba9f800906020016109ee565b306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161415610e5c5760405162461bcd60e51b815260040161083390612937565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610e8e611893565b6001600160a01b031614610eb45760405162461bcd60e51b815260040161083390612983565b610ebd826118c1565b610ec9828260016118ec565b5050565b6000610ed961015f5490565b905090565b61012d546001600160a01b03163314610f095760405162461bcd60e51b815260040161083390612a1d565b6040516001600160a01b0383169082156108fc029083906000818181858888f19350505050158015610f3f573d6000803e3d6000fd5b506101648190556040518181527f220ec5a0a019687835ed4538d7753fcb40107f41eef171f4c2c714670ba9f8009060200160405180910390a1604080516001600160a01b0384168152602081018390527f1fcaecd273867ff17046c2bc251fad3bb1e7bf5f0a80880a401e53092b8bcebb910160405180910390a15050565b6000818152606760205260408120546001600160a01b0316806107315760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b6064820152608401610833565b61012d546001600160a01b031633146109f95760405162461bcd60e51b815260040161083390612a1d565b60006001600160a01b0382166110cc5760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b6064820152608401610833565b506001600160a01b031660009081526068602052604090205490565b61012d546001600160a01b031633146111135760405162461bcd60e51b815260040161083390612a1d565b61111d6000611a37565b565b600054610100900460ff1680611138575060005460ff16155b6111545760405162461bcd60e51b8152600401610833906129cf565b600054610100900460ff1615801561117f576000805460ff1961ff0019909116610100171660011790555b6111cc6040518060400160405280600e81526020016d547265617375726520436865737360901b81525060405180604001604052806005815260200164434845535360d81b815250611a8a565b6111d4611b1a565b33600090815261016060205260409020805460ff191660011790558015610d94576000805461ff001916905550565b60606066805461074890612b12565b6001600160a01b03821633141561126b5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610833565b336000818152606a602090815260408083206001600160a01b0387168085529252909120805460ff1916841515179055906001600160a01b03167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516112d8911515815260200190565b60405180910390a35050565b6112ee338361144b565b61130a5760405162461bcd60e51b815260040161083390612a52565b61131684848484611b9e565b50505050565b606061073182611bd1565b61012d546001600160a01b031633146113525760405162461bcd60e51b815260040161083390612a1d565b6001600160a01b0381166113b75760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610833565b610d9481611a37565b6000908152606760205260409020546001600160a01b0316151590565b600081815260696020526040902080546001600160a01b0319166001600160a01b038416908117909155819061141282610fbf565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000611456826113c0565b6114b75760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b6064820152608401610833565b60006114c283610fbf565b9050806001600160a01b0316846001600160a01b031614806114fd5750836001600160a01b03166114f2846107cb565b6001600160a01b0316145b8061152d57506001600160a01b038082166000908152606a602090815260408083209388168352929052205460ff165b949350505050565b826001600160a01b031661154882610fbf565b6001600160a01b0316146115b05760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201526839903737ba1037bbb760b91b6064820152608401610833565b6001600160a01b0382166116125760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610833565b61161d6000826113dd565b6001600160a01b0383166000908152606860205260408120805460019290611646908490612acf565b90915550506001600160a01b0382166000908152606860205260408120805460019290611674908490612aa3565b909155505060008181526067602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6001600160a01b03821661172b5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610833565b611734816113c0565b156117815760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610833565b6001600160a01b03821660009081526068602052604081208054600192906117aa908490612aa3565b909155505060008181526067602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b611811826113c0565b6118745760405162461bcd60e51b815260206004820152602e60248201527f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60448201526d32bc34b9ba32b73a103a37b5b2b760911b6064820152608401610833565b60008281526097602090815260409091208251610969928401906123c4565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b61012d546001600160a01b03163314610d945760405162461bcd60e51b815260040161083390612a1d565b60006118f6611893565b905061190184611d41565b60008351118061190e5750815b1561191f5761191d8484611de6565b505b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd9143805460ff16611a3057805460ff191660011781556040516001600160a01b038316602482015261199e90869060440160408051601f198184030181529190526020810180516001600160e01b0316631b2ce7f360e11b179052611de6565b50805460ff191681556119af611893565b6001600160a01b0316826001600160a01b031614611a275760405162461bcd60e51b815260206004820152602f60248201527f45524331393637557067726164653a207570677261646520627265616b73206660448201526e75727468657220757067726164657360881b6064820152608401610833565b611a3085611ed1565b5050505050565b61012d80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff1680611aa3575060005460ff16155b611abf5760405162461bcd60e51b8152600401610833906129cf565b600054610100900460ff16158015611aea576000805460ff1961ff0019909116610100171660011790555b611af2611f11565b611afa611f11565b611b048383611f84565b8015610969576000805461ff0019169055505050565b600054610100900460ff1680611b33575060005460ff16155b611b4f5760405162461bcd60e51b8152600401610833906129cf565b600054610100900460ff16158015611b7a576000805460ff1961ff0019909116610100171660011790555b611b82611f11565b611b8a612022565b8015610d94576000805461ff001916905550565b611ba9848484611535565b611bb58484848461208b565b6113165760405162461bcd60e51b8152600401610833906128e5565b6060611bdc826113c0565b611c425760405162461bcd60e51b815260206004820152603160248201527f45524337323155524953746f726167653a2055524920717565727920666f72206044820152703737b732bc34b9ba32b73a103a37b5b2b760791b6064820152608401610833565b60008281526097602052604081208054611c5b90612b12565b80601f0160208091040260200160405190810160405280929190818152602001828054611c8790612b12565b8015611cd45780601f10611ca957610100808354040283529160200191611cd4565b820191906000526020600020905b815481529060010190602001808311611cb757829003601f168201915b505050505090506000611cf260408051602081019091526000815290565b9050805160001415611d0657509050610734565b815115611d38578082604051602001611d2092919061282e565b60405160208183030381529060405292505050610734565b61152d84612198565b803b611da55760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608401610833565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b6060823b611e455760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401610833565b600080846001600160a01b031684604051611e609190612812565b600060405180830381855af49150503d8060008114611e9b576040519150601f19603f3d011682016040523d82523d6000602084013e611ea0565b606091505b5091509150611ec88282604051806060016040528060278152602001612bea60279139612270565b95945050505050565b611eda81611d41565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b600054610100900460ff1680611f2a575060005460ff16155b611f465760405162461bcd60e51b8152600401610833906129cf565b600054610100900460ff16158015611b8a576000805460ff1961ff0019909116610100171660011790558015610d94576000805461ff001916905550565b600054610100900460ff1680611f9d575060005460ff16155b611fb95760405162461bcd60e51b8152600401610833906129cf565b600054610100900460ff16158015611fe4576000805460ff1961ff0019909116610100171660011790555b8251611ff79060659060208601906123c4565b50815161200b9060669060208501906123c4565b508015610969576000805461ff0019169055505050565b600054610100900460ff168061203b575060005460ff16155b6120575760405162461bcd60e51b8152600401610833906129cf565b600054610100900460ff16158015612082576000805460ff1961ff0019909116610100171660011790555b611b8a33611a37565b60006001600160a01b0384163b1561218d57604051630a85bd0160e11b81526001600160a01b0385169063150b7a02906120cf90339089908890889060040161285d565b602060405180830381600087803b1580156120e957600080fd5b505af1925050508015612119575060408051601f3d908101601f19168201909252612116918101906127ca565b60015b612173573d808015612147576040519150601f19603f3d011682016040523d82523d6000602084013e61214c565b606091505b50805161216b5760405162461bcd60e51b8152600401610833906128e5565b805181602001fd5b6001600160e01b031916630a85bd0160e11b14905061152d565b506001949350505050565b60606121a3826113c0565b6122075760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b6064820152608401610833565b600061221e60408051602081019091526000815290565b9050600081511161223e5760405180602001604052806000815250612269565b80612248846122a9565b60405160200161225992919061282e565b6040516020818303038152906040525b9392505050565b6060831561227f575081612269565b82511561228f5782518084602001fd5b8160405162461bcd60e51b815260040161083391906128d2565b6060816122ce57506040805180820190915260018152600360fc1b6020820152610734565b8160005b81156122f857806122e281612b4d565b91506122f19050600a83612abb565b91506122d2565b60008167ffffffffffffffff81111561232157634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561234b576020820181803683370190505b5090505b841561152d57612360600183612acf565b915061236d600a86612b68565b612378906030612aa3565b60f81b81838151811061239b57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a9053506123bd600a86612abb565b945061234f565b8280546123d090612b12565b90600052602060002090601f0160209004810192826123f25760008555612438565b82601f1061240b57805160ff1916838001178555612438565b82800160010185558215612438579182015b8281111561243857825182559160200191906001019061241d565b50612444929150612448565b5090565b5b808211156124445760008155600101612449565b600067ffffffffffffffff8084111561247857612478612ba8565b604051601f8501601f19908116603f011681019082821181831017156124a0576124a0612ba8565b816040528093508581528686860111156124b957600080fd5b858560208301376000602087830101525050509392505050565b8035801515811461073457600080fd5b600082601f8301126124f3578081fd5b6122698383356020850161245d565b803561ffff8116811461073457600080fd5b600060208284031215612525578081fd5b813561226981612bbe565b60008060408385031215612542578081fd5b823561254d81612bbe565b946020939093013593505050565b6000806040838503121561256d578182fd5b823561257881612bbe565b9150602083013561258881612bbe565b809150509250929050565b6000806000606084860312156125a7578081fd5b83356125b281612bbe565b925060208401356125c281612bbe565b929592945050506040919091013590565b600080600080608085870312156125e8578081fd5b84356125f381612bbe565b9350602085013561260381612bbe565b925060408501359150606085013567ffffffffffffffff811115612625578182fd5b612631878288016124e3565b91505092959194509250565b6000806040838503121561264f578182fd5b823561265a81612bbe565b9150612668602084016124d3565b90509250929050565b60008060408385031215612683578182fd5b823561268e81612bbe565b9150602083013567ffffffffffffffff8111156126a9578182fd5b6126b5858286016124e3565b9150509250929050565b600080600080600080600080610100898b0312156126db578384fd5b88356126e681612bbe565b9750602089013567ffffffffffffffff811115612701578485fd5b8901601f81018b13612711578485fd5b6127208b82356020840161245d565b97505060408901359550606089013560ff8116811461273d578485fd5b945061274b60808a01612502565b935061275960a08a01612502565b925061276760c08a01612502565b915061277560e08a016124d3565b90509295985092959890939650565b60008060408385031215612542578182fd5b6000602082840312156127a7578081fd5b5035919050565b6000602082840312156127bf578081fd5b813561226981612bd3565b6000602082840312156127db578081fd5b815161226981612bd3565b600081518084526127fe816020860160208601612ae6565b601f01601f19169290920160200192915050565b60008251612824818460208701612ae6565b9190910192915050565b60008351612840818460208801612ae6565b835190830190612854818360208801612ae6565b01949350505050565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090612890908301846127e6565b9695505050505050565b600060018060a01b0386168252846020830152608060408301526128c160808301856127e6565b905082606083015295945050505050565b60006020825261226960208301846127e6565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b19195b1959d85d1958d85b1b60a21b606082015260800190565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b6163746976652070726f787960a01b606082015260800190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b60008219821115612ab657612ab6612b7c565b500190565b600082612aca57612aca612b92565b500490565b600082821015612ae157612ae1612b7c565b500390565b60005b83811015612b01578181015183820152602001612ae9565b838111156113165750506000910152565b600281046001821680612b2657607f821691505b60208210811415612b4757634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415612b6157612b61612b7c565b5060010190565b600082612b7757612b77612b92565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114610d9457600080fd5b6001600160e01b031981168114610d9457600080fdfe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220dd2169e0a40f2bbe3ddef61a022d22ee4fae0c6b3bf84fb14c0f2d7017d0568e64736f6c63430008020033";

export class TreasureUpgraded__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TreasureUpgraded> {
    return super.deploy(overrides || {}) as Promise<TreasureUpgraded>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TreasureUpgraded {
    return super.attach(address) as TreasureUpgraded;
  }
  connect(signer: Signer): TreasureUpgraded__factory {
    return super.connect(signer) as TreasureUpgraded__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TreasureUpgradedInterface {
    return new utils.Interface(_abi) as TreasureUpgradedInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TreasureUpgraded {
    return new Contract(address, _abi, signerOrProvider) as TreasureUpgraded;
  }
}

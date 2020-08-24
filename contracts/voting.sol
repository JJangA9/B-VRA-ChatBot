pragma solidity ^0.4.24;

contract BVRAvote{
    
    bytes32[] public optionList;
    
    constructor(bytes32[] options) public {
        optionList = options;
    }
    
    mapping(bytes32 => bytes32) public uservotes;
    mapping(bytes32 => uint8) public votes;
    
    function voting(bytes32 StuNum, bytes32 option) public {
        require(uservotes[StuNum]!='');
        uservotes[StuNum] = option;
        votes[option] += 1;
        
        VoteCompleted(option, votes[option]);
    }
    
    event VoteCompleted(bytes32 option, uint8 count);
    
    function totalVotesFor(bytes32 option) view public returns (uint8) {
        require(validOption(option));
        return votes[option];
    }
    
    function validOption(bytes32 option) view internal returns (bool){
        for(uint i = 0; i< optionList.length; i++){
            if (optionList[i] == option) {
                return true;
            }
        }
        return false;
    }
    
    function getOptionList() public view returns(bytes32[] option) {
        return optionList;
    }
 }
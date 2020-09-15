pragma solidity ^0.4.11;
contract Lottery {
    // 응모자 관리
    mapping (uint => address) public applicants;

    uint public numApplicants;
    address public winnerAddress;
    uint public winnerInd;

    address public owner;
    uint public timestamp;

    //소유자 확인하는 모디파이어
    modifier onlyOwner(){
        require(msg.sender == owner);
        _;
    }

    /// 생성자
    function Lottery() {
        numApplicants = 0;
        owner = msg.sender;
    }

    // 추첨 응모함수
    function enter() public {
        //응모자가 3명미만인지 require를 통해 확인
        require(numApplicants <3);

        //이미 응모한 사람인지
        for(uint i = 0; i< numApplicants; i++){
            require(applicants[i] != msg.sender);
        }

        //응모 처리
        applicants[numApplicants++] = msg.sender;
    }

    function hold() public onlyOwner {
        //응모자가 3명 이상인지 확인
        require(numApplicants == 3);

        //타임스탬프 값 추가
        timestamp = block.timestamp;

        //추첨
        winnerInd = timestamp %3;
        winnerAddress = applicants[winnerInd];
    }
}




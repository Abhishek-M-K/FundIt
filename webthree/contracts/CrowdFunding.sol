// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.9;

contract CrowdFunding {
    struct Campaign {
        address owner;
        string title;
        string description;
        uint256 target;
        uint256 deadline;
        uint256 amountRaised;
        string image;
        address[] donators;
        uint256[] donations;
    }

    //mapping to access a campaign from bunch of others
    //here we cant access a campaign like --> Campaign[0]
    mapping(uint256 => Campaign) public campaigns;

    uint256 public numOfCampaigns = 0;

    function createCampaign(
        address _owner,
        string memory _title,
        string memory _description,
        uint256 _target,
        uint256 _deadline,
        string memory _image
    ) public returns (uint256) {
        Campaign storage campaign = campaigns[numOfCampaigns];

        //check -- test
        require(
            campaign.deadline < block.timestamp,
            "The Deadline should be a Date in Future !"
        );

        campaign.owner = _owner;
        campaign.title = _title;
        campaign.description = _description;
        campaign.target = _target;
        campaign.deadline = _deadline;
        campaign.amountRaised = 0;
        campaign.image = _image;

        numOfCampaigns++;

        return numOfCampaigns - 1; //index of the most newly created campaign is returned
    }

    //id of the campaign we want to fund it to
    //payable keyword signifies that we'll be sending some crypto
    function fundCampaign(uint256 _id) public payable {
        uint256 amount = msg.value;

        Campaign storage campaign = campaigns[_id];

        campaign.donators.push(msg.sender);
        campaign.donations.push(amount);

        //transaction
        (bool sent, ) = payable(campaign.owner).call{value: amount}("");

        if (sent) {
            campaign.amountRaised = campaign.amountRaised + amount;
        }
    }

    //view func means we going just view some data / GET
    //func will return address of donators/funders
    //and also the amount donated/funded by them
    function getDonators(
        uint256 _id
    ) public view returns (address[] memory, uint256[] memory) {
        return (campaigns[_id].donators, campaigns[_id].donations);
    }

    function getCampaigns() public view returns (Campaign[] memory) {
        //creating an empty new array containig Campaign structs and then we'll populate it
        Campaign[] memory allCampaigns = new Campaign[](numOfCampaigns);

        for (uint i = 0; i < numOfCampaigns; i++) {
            Campaign storage item = campaigns[i];

            allCampaigns[i] = item;
        }

        return allCampaigns;
    }
}

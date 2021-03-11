



    const EggToken = artifacts.require("EggToken");
    const MasterChef = artifacts.require("MasterChef");
    const Timelock = artifacts.require("Timelock");
  
    let devAddress = "";

    let feeAddress= "";
    let rewardPerBlock = web3.utils.toWei('1.5');

    //reward will start after this block
    let rewardFromBlock= 6658440;
    
    module.exports = async function(deployer) {
  
      //deploy governance token
      await deployer.deploy(EggToken);
      const eggToken = await EggToken.deployed();

      //mint some token for us
      await eggToken.mint(devAddress, web3.utils.toWei('10000'));


      
      //deploy masterchef 
      await deployer.deploy(MasterChef,eggToken.address,devAddress,feeAddress,rewardPerBlock, rewardFromBlock);
    

      //transfer governance token ownership to masterchef
      await eggToken.transferOwnership(MasterChef.address);


      let masterChefInstance = await MasterChef.deployed();

      //============deploy farms =================================

      //pid 1 
      //name BNB-BUSD LP
      //0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c


      //params reward per block,LPAddress,fee = 4% , isUpdate
      masterChefInstance.add(rewardPerBlock,"0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",400,false)


      //pid 2 
      //name USDT-BUSD LP
      //0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd


      //params reward per block,LPAddress,fee = 4% , isUpdate
      masterChefInstance.add(web3.utils.toWei('2'),"0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd",400,false)



      //============deploy staking Pools =================================


       //pid 3 
      //name BUSD 
      //0xe9e7cea3dedca5984780bafc599bd69add087d56


      //params reward per block,LPAddress,fee = 4% , isUpdate
      masterChefInstance.add(web3.utils.toWei('1'),"0xe9e7cea3dedca5984780bafc599bd69add087d56",400,false)






      //RUN this command to verify contract
      // truffle run verify EggToken --network bsctest
    };

//npx hardhat run --network alfajores scripts/mint-safe.js
async function main() {
    const [deployer] = await ethers.getSigners();

    // We get the contract to deploy
    const Membership = await hre.ethers.getContractFactory("Membership");
    const membership = await Membership.attach(
        "0x51E2AfB7aE86E407eC406bf199182fe7B44956b9"
    );

    const res = await membership.safeMint(deployer.address, "silver.json");

    const ok = await res.wait();

    console.log(ok);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

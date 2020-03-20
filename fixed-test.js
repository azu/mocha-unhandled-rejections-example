process.on("unhandledRejection", reason => {
    throw reason;
});

async function fail() {
    throw new Error("FAIL!!");
}

it("is unhandled rejection", () => {
    fail();
});

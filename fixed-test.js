process.on("unhandledRejection", reason => {
    throw reason;
});

async function fail() {
    throw new Error("FAIL!!");
}

it("unhandled rejection, but throw it", () => {
    fail();
});

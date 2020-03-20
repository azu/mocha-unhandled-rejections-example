async function fail() {
    throw new Error("FAIL!!");
}

it("unhandled rejection", () => {
    fail();
});

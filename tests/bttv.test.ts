import client from "../src/index";

describe("Should test the BTTV Client functions", () => {
	it("Should fetch all global emotes", async () => {
		const emotes = await client.bttv.getGlobalEmotes();
		expect(emotes.length > 0).toBeTruthy();
	});

	it("Should fetch all badges", async () => {
		const badges = await client.bttv.getGlobalEmotes();
		expect(badges.length > 0).toBeTruthy();
	});

	it("Should fetch emotes for a specific channel", async () => {
		const channel = await client.bttv.getEmotes("1518077");
		expect(channel.channelEmotes.length > 0).toBeTruthy();
	});

	it("Should create a emote uri", async () => {
		const v1 = client.bttv.getEmoteUri("5a970ab2122e4331029f0d7e", "1x");
		expect(v1).toBe("https://cdn.betterttv.net/emote/5a970ab2122e4331029f0d7e/1x");

		const v2 = client.bttv.getEmoteUri("5a970ab2122e4331029f0d7e", "2x");
		expect(v2).toBe("https://cdn.betterttv.net/emote/5a970ab2122e4331029f0d7e/2x");

		const v3 = client.bttv.getEmoteUri("5a970ab2122e4331029f0d7e", "3x");
		expect(v3).toBe("https://cdn.betterttv.net/emote/5a970ab2122e4331029f0d7e/3x");
	});
});
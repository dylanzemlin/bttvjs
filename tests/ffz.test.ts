import client from "../src/index";

describe("Should test the FFZ Client functions", () => {
	it("Should fetch all global emotes", async () => {
		const room = await client.ffz.getRoom("1518077");
		expect(room.room.twitch_id).toBe(1518077);
	});

	it("Should create an emote uri", async () => {
		const v1 = client.ffz.getEmote(425196, 1);
		expect(v1).toBe("https://cdn.frankerfacez.com/emote/425196/1");

		const v2 = client.ffz.getEmote(425196, 2);
		expect(v2).toBe("https://cdn.frankerfacez.com/emote/425196/2");

		const v4 = client.ffz.getEmote(425196, 4);
		expect(v4).toBe("https://cdn.frankerfacez.com/emote/425196/4");
	});
});
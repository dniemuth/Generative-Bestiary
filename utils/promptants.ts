export const PAYLOAD = {
  model: "gpt-3.5-turbo",
  // prompt: searched,
  temperature: 0.8,
  // max_tokens: 2048,
  max_tokens: 1500,
  top_p: 1.0,
  frequency_penalty: 0.0,
  // stream: true,
  presence_penalty: 0.0,
  n: 1,
};

export const PROMPT_INTRO = "Create a D&D creature stat block in JSON format. Make sure the returned JSON is valid.";
export const PROMPT_ENDING = `The JSON should include the following fields: 
- name (string)
- size (string)
- type (string)
- subtype (string)
- group (string)
- alignment (string)
- armor_class (number)
- armor_desc (string)
- hit_points (number)
- hit_dice (string)
- speed (object with fields: walk, swim, fly, climb, burrow)
- strength (number)
- dexterity (number)
- constitution (number)
- intelligence (number)
- wisdom (number)
- charisma (number)
- strength_save (number)
- dexterity_save (number)
- constitution_save (number)
- intelligence_save (number)
- wisdom_save (number)
- charisma_save (number)
- perception (number)
- skills (object)
- damage_vulnerabilities (string)
- damage_resistances (string)
- damage_immunities (string)
- condition_immunities (string)
- senses (string)
- languages (string)
- challenge_rating (string)
- cr (number)
- actions (array)
- reactions (array)
- legendary_desc (string)
- legendary_actions (array)
- special_abilities (array)
- spell_list (array)

`;
export const PROMPT_EXAMPLE = `Example Output:
{
  "desc": "",
  "name": "Adult Black Dragon",
  "size": "Huge",
  "type": "Dragon",
  "subtype": "",
  "group": "Black Dragon",
  "alignment": "chaotic evil",
  "armor_class": 19,
  "armor_desc": "natural armor",
  "hit_points": 195,
  "hit_dice": "17d12+85",
  "speed": {
    "walk": 40,
    "fly": 80,
    "swim": 40
  },
  "strength": 23,
  "dexterity": 14,
  "constitution": 21,
  "intelligence": 14,
  "wisdom": 13,
  "charisma": 17,
  "strength_save": null,
  "dexterity_save": 7,
  "constitution_save": 10,
  "intelligence_save": null,
  "wisdom_save": 6,
  "charisma_save": 8,
  "perception": 11,
  "skills": {
    "perception": 11,
    "stealth": 7
  },
  "damage_vulnerabilities": "",
  "damage_resistances": "",
  "damage_immunities": "acid",
  "condition_immunities": "",
  "senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 21",
  "languages": "Common, Draconic",
  "challenge_rating": "14",
  "cr": 14.0,
  "actions": [
    {
      "name": "Multiattack",
      "desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
    },
    {
      "name": "Bite",
      "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage plus 4 (1d8) acid damage.",
      "attack_bonus": 11,
      "damage_dice": "2d10+1d8",
      "damage_bonus": 6
    },
    {
      "name": "Claw",
      "desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage.",
      "attack_bonus": 11,
      "damage_dice": "2d6",
      "damage_bonus": 6
    },
    {
      "name": "Tail",
      "desc": "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage.",
      "attack_bonus": 11,
      "damage_dice": "2d8",
      "damage_bonus": 6
    },
    {
      "name": "Frightful Presence",
      "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
    },
    {
      "name": "Acid Breath (Recharge 5-6)",
      "desc": "The dragon exhales acid in a 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 54 (12d8) acid damage on a failed save, or half as much damage on a successful one.",
      "attack_bonus": 0,
      "damage_dice": "12d8"
    }
  ],
  "reactions": null,
  "legendary_desc": "The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn.",
  "legendary_actions": [
    {
      "name": "Detect",
      "desc": "The dragon makes a Wisdom (Perception) check."
    },
    {
      "name": "Tail Attack",
      "desc": "The dragon makes a tail attack."
    },
    {
      "name": "Wing Attack (Costs 2 Actions)",
      "desc": "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
    }
  ],
  "special_abilities": [
    {
      "name": "Amphibious",
      "desc": "The dragon can breathe air and water."
    },
    {
      "name": "Legendary Resistance (3/Day)",
      "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
    }
  ],
  "spell_list": [],
}`;

export const STORY_INTRO = `Create a short story for a D&D character.`
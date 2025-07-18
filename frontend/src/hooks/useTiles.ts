import { useState } from 'react';
import { useEffect } from 'react';
import type { TileBasicType } from '../pages/Docs/components/Tile/Types/TileBasicType';
import type { TileDetailType } from '../pages/Docs/components/Tile/Types/TileDetailType';

export const useTiles = () => {
  const [tiles, setTiles] = useState<TileBasicType[]>([]);
  const [selectedTile, setSelectedTile] = useState<TileDetailType | null>(null);

    useEffect(() => {
    // MOCK
    setTiles([
      { id: 1, type: 'event', title: 'on block break', description: 'Triggered when a block is broken', addon: 'Skript' },
      { id: 2, type: 'condition', title: 'player is flying', description: 'Checks if the player is flying', addon: 'SkBee' },
      { id: 3, type: 'effect', title: 'set player\'s health to 20', description: 'Sets the player\'s health to full', addon: 'SkBee' },
      { id: 4, type: 'expression', title: 'location of player', description: 'Gets the location of the player', addon: 'SkQuery' },
      { id: 5, type: 'function', title: 'function heal(p: player)', description: 'Heals the given player', addon: 'Skript' },
      { id: 6, type: 'section', title: 'loop all players:', description: 'Executes code for each online player', addon: 'Skript' },
      { id: 7, type: 'structure', title: 'command /heal:', description: 'Defines a custom command', addon: 'Skript' },
      { id: 8, type: 'event', title: 'on chat', description: 'Triggered when a player sends a message', addon: 'Skript' },
      { id: 9, type: 'expression', title: 'ping of player', description: 'Returns the ping of a player', addon: 'SkBee' },
      { id: 10, type: 'function', title: 'function giveItem(p: player, i: item)', description: 'Gives an item to a player', addon: 'Skript' },

      { id: 11, type: 'event', title: 'on player join', description: 'Fires when a player joins the server', addon: 'Skript' },
      { id: 12, type: 'condition', title: 'world is "nether"', description: 'Checks if the current world is the Nether', addon: 'SkBee' },
      { id: 13, type: 'effect', title: 'teleport player to location', description: 'Teleports the player to a location', addon: 'SkQuery' },
      { id: 14, type: 'expression', title: 'target block of player', description: 'Gets the block the player is looking at', addon: 'SkQuery' },
      { id: 15, type: 'function', title: 'function banPlayer(p: player)', description: 'Bans the specified player', addon: 'Skript' },
      { id: 16, type: 'section', title: 'loop all dropped items:', description: 'Iterates over all dropped items in world', addon: 'Skript' },
      { id: 17, type: 'structure', title: 'every 1 second:', description: 'Repeats the code block every second', addon: 'Skript' },
      { id: 18, type: 'event', title: 'on item pickup', description: 'Triggered when player picks up an item', addon: 'SkBee' },
      { id: 19, type: 'condition', title: 'clicked block is dirt', description: 'Checks if clicked block is dirt', addon: 'SkBee' },
      { id: 20, type: 'effect', title: 'clear player\'s inventory', description: 'Removes all items from inventory', addon: 'SkBee' },

      { id: 21, type: 'event', title: 'on inventory close', description: 'Triggered when player closes inventory', addon: 'Tuske' },
      { id: 22, type: 'condition', title: 'player is in creative mode', description: 'Checks if player is in creative mode', addon: 'Skript' },
      { id: 23, type: 'effect', title: 'give player 5 diamonds', description: 'Gives player specified amount of diamonds', addon: 'SkBee' },
      { id: 24, type: 'expression', title: 'health of victim', description: 'Returns the health of the damaged entity', addon: 'SkBee' },
      { id: 25, type: 'function', title: 'function addMoney(p: player, a: number)', description: 'Adds money to player balance', addon: 'skript-reflect' },
      { id: 26, type: 'section', title: 'loop 10 times:', description: 'Loops the block 10 times', addon: 'Skript' },
      { id: 27, type: 'structure', title: 'on rightclick:', description: 'Handles right-click interactions', addon: 'Skript' },
      { id: 28, type: 'event', title: 'on projectile hit', description: 'Triggered when a projectile hits a block/entity', addon: 'Skript' },
      { id: 29, type: 'condition', title: 'shooter is player', description: 'Checks if the shooter is a player', addon: 'SkBee' },
      { id: 30, type: 'effect', title: 'launch creeper from player', description: 'Launches creeper from player location', addon: 'SkRayFall' },

      { id: 31, type: 'event', title: 'on command "/example"', description: 'Runs when /example is used', addon: 'Skript' },
      { id: 32, type: 'condition', title: 'player has permission "admin.use"', description: 'Checks permission node', addon: 'SkBee' },
      { id: 33, type: 'effect', title: 'stop trigger', description: 'Immediately ends the event trigger', addon: 'Skript' },
      { id: 34, type: 'expression', title: 'uuid of player', description: 'Returns player UUID', addon: 'SkBee' },
      { id: 35, type: 'function', title: 'function sendTitle(p: player, t: text)', description: 'Displays title to player', addon: 'SkRayFall' },
      { id: 36, type: 'section', title: 'loop players in world "lobby":', description: 'Iterates only lobby players', addon: 'Skript' },
      { id: 37, type: 'structure', title: 'custom event "on mob kill":', description: 'User-defined event', addon: 'Skript' },
      { id: 38, type: 'event', title: 'on region enter', description: 'Fires when player enters WorldGuard region', addon: 'SkBee' },
      { id: 39, type: 'condition', title: 'region is "spawn"', description: 'Checks if region is named "spawn"', addon: 'SkBee' },
      { id: 40, type: 'effect', title: 'cancel event', description: 'Stops further execution of event', addon: 'Skript' },

      { id: 41, type: 'event', title: 'on armor equip', description: 'Fires when player equips armor', addon: 'SkBee' },
      { id: 42, type: 'condition', title: 'player is sneaking', description: 'Checks if player is sneaking', addon: 'Skript' },
      { id: 43, type: 'effect', title: 'set time to 0', description: 'Sets world time to day', addon: 'SkBee' },
      { id: 44, type: 'expression', title: 'current world of player', description: 'Gets player\'s current world', addon: 'SkBee' },
      { id: 45, type: 'function', title: 'function strike(p: player)', description: 'Strikes lightning on player', addon: 'Skript' },
      { id: 46, type: 'section', title: 'loop all mobs:', description: 'Loops all mobs in all worlds', addon: 'SkBee' },
      { id: 47, type: 'structure', title: 'on script load:', description: 'Executed when script loads', addon: 'Skript' },
      { id: 48, type: 'event', title: 'on server ping', description: 'Triggered when server is pinged', addon: 'SkBee' },
      { id: 49, type: 'condition', title: 'server is full', description: 'Checks if server is full', addon: 'Skript' },
      { id: 50, type: 'effect', title: 'kick player due to full server', description: 'Kicks player if server full', addon: 'Skript' }
  ]
);
  }, []);

  /**
  useEffect(() => {
    fetch('/api/tiles')
      .then((res) => res.json())
      .then((data) => setTiles(data));
  }, []);
*/

  const selectTile = async (id: number) => {
    const res = await fetch(`/api/tiles/${id}`);
    const detail = await res.json();
    setSelectedTile(detail);
  };

  return { tiles, selectedTile, selectTile };
};
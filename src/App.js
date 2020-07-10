import React from 'react';
import { MineSweeperGame } from './game/ms_game';
import { MineSweeperHeader } from './game/ms__header';

export function MineSweeper() {
  return (
    <div>
      <MineSweeperHeader />
      {/* <MineSweeperGame name="SUPA DEMINEUR" width="10" height="5" mines="20" /> */}
    </div>
  );
}

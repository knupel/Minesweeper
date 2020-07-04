import React from 'react';
import { MineSweeperGame } from './game/ms_game';

export function MineSweeper() {
  return (
    <div>
      <MineSweeperGame name="MSBG 32" width="5" height="5" mines="20" />
      {/* <MineSweeperGame name="MSBG 31" /> */}
    </div>
  );
}

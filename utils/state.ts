export const useMonster = () => useState<any>('monster', () => ({}));
export const useMonsterPending = () => useState<any>('monsterPending', () => false);
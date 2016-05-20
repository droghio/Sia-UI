// locking.js: wallet locking actions
import * as constants from '../constants/wallet.js';

export const getLockStatus = () => ({
	type: constants.GET_LOCK_STATUS,
});
export const setLocked = () => ({
	type: constants.SET_LOCKED,
});
export const setUnlocked = () => ({
	type: constants.SET_UNLOCKED,
});
export const setEncrypted = () => ({
	type: constants.SET_ENCRYPTED,
});
export const setUnencrypted = () => ({
	type: constants.SET_UNENCRYPTED,
});
export const startPasswordPrompt = () => ({
	type: constants.START_PASSWORD_PROMPT,
});
export const dismissNewWalletDialog = () => ({
	type: constants.DISMISS_NEW_WALLET_DIALOG,
});
export const showNewWalletDialog = (password, seed) => ({
	type: constants.SHOW_NEW_WALLET_DIALOG,
	password,
	seed
});
export const unlockWallet = (password) => ({
	type: constants.UNLOCK_WALLET,
	password,
});
export const createNewWallet = () => ({
	type: constants.CREATE_NEW_WALLET,
});
export const getBalance = () => ({
	type: constants.GET_BALANCE,
});
export const setBalance = (confirmed, unconfirmed) => ({
	type: constants.SET_BALANCE,
	confirmed,
	unconfirmed,
});
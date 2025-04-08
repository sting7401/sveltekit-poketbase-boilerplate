// for information about these interfaces
// and what to do when importing types
declare App {
	interface Error {}
}

declare global {
	
		namespace App {
			
				interface Locals {
					user: import('$lib/server/auth').SessionValidationResult['user'];
					session: import('$lib/server/auth').SessionValidationResult['session']
				}
			
		}
	
}

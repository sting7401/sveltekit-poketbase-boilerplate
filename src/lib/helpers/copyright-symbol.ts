export default function getCopyrightsSymbol(type: string): string {
	if (type === 'R') {
		return '®';
	} else if (type === 'P') {
		return 'ⓟ';
	} else if (type === 'C') {
		return 'ⓒ';
	} else {
		return type;
	}
}

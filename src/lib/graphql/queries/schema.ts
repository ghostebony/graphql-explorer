import { gql } from 'graphql-request';

export default gql`
	query ($type: String!) {
		__type(name: $type) {
			...FullType
		}
	}

	fragment FullType on __Type {
		kind
		name
		description
		fields(includeDeprecated: true) {
			name
			description
			args {
				...InputValue
			}
			type {
				...Type
			}
			isDeprecated
			deprecationReason
		}
		inputFields {
			...InputValue
		}
		interfaces {
			...Type
		}
		enumValues(includeDeprecated: true) {
			name
			description
			isDeprecated
			deprecationReason
		}
		possibleTypes {
			...Type
		}
	}

	fragment InputValue on __InputValue {
		name
		description
		defaultValue
		type {
			name
			kind
			description
			# inputFields {
			# 	...InputValue
			# }
			fields {
				...SubField
			}
			ofType {
				...Type
			}
			enumValues {
				...EnumValue
			}
			possibleTypes {
				...Type
			}
		}
	}

	fragment SubField on __Field {
		name
		description
		isDeprecated
		deprecationReason
		type {
			...Type
		}
		args {
			name
			description
			type {
				...Type
			}
			defaultValue
		}
	}

	fragment Type on __Type {
		name
		kind
		description
		ofType {
			name
			kind
			description
			ofType {
				name
				kind
				description
				ofType {
					name
					kind
					description
					ofType {
						name
						kind
						description
						ofType {
							name
							kind
							description
							ofType {
								name
								kind
								description
								ofType {
									name
									kind
									description
									ofType {
										name
										kind
										description
									}
								}
							}
						}
					}
				}
			}
		}
	}

	fragment EnumValue on __EnumValue {
		name
		description
	}
`;

export default interface _Schema_NEW {
	__type: FullType | null;
}

export interface FullType {
	kind: string;
	name: string | null;
	description: string | null;
	fields: {
		name: string;
		description: string | null;
		args: InputValue[];
		type: Type;
		isDeprecated: boolean;
		deprecationReason: string | null;
	}[];
	inputFields: InputValue[];
	interfaces: Type[];
	enumValues: {
		name: string;
		description: string | null;
		isDeprecated: boolean;
		deprecationReason: string | null;
	}[];
	possibleTypes: Type[];
}

export interface InputValue {
	name: string;
	description: string | null;
	defaultValue: unknown | null;
	type: {
		name: string | null;
		kind: string;
		description: string | null;
		// inputFields {
		// 	...InputValue
		// }
		fields: SubField[];
		ofType: Type | null;
		enumValues: EnumValue[];
		possibleTypes: Type[];
	};
}

export interface SubField {
	name: string;
	description: string | null;
	isDeprecated: boolean;
	deprecationReason: string | null;
	type: Type;
	args: {
		name: string;
		description: string | null;
		type: Type;
		defaultValue: unknown | null;
	}[];
}

export interface Type {
	name: string | null;
	kind: string;
	description: string | null;
	ofType: {
		name: string | null;
		kind: string;
		description: string | null;
		ofType: {
			name: string | null;
			kind: string;
			description: string | null;
			ofType: {
				name: string | null;
				kind: string;
				description: string | null;
				ofType: {
					name: string | null;
					kind: string;
					description: string | null;
					ofType: {
						name: string | null;
						kind: string;
						description: string | null;
						ofType: {
							name: string | null;
							kind: string;
							description: string | null;
							ofType: {
								name: string | null;
								kind: string;
								description: string | null;
								ofType: {
									name: string | null;
									kind: string;
									description: string | null;
								};
							};
						};
					};
				};
			};
		};
	};
}

export interface EnumValue {
	name: string;
	description: string | null;
}

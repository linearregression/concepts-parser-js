
const conceptsData = require('concepts-data');

/**
 * Rename a concept
 */
module.exports = function rename(concepts, context) {
	const rules = conceptsData.getRenameConcepts(context.lang, context.country);

	return concepts.filter(function(concept) {
		for (var i = 0; i < rules.length; i++) {
			if (rules[i].reg.test(concept.atonic)) {
				concept.name = rules[i].name;
				return true;
			}
		}

		return true;
	});
};

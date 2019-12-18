module.exports = (sequelize, DataTypes) => {
	var Comic = sequelize.define('Comic', {
		title: {
			type: DataTypes.STRING,
			
		}, issue: {
			type: DataTypes.STRING,
			
		}, month: {
			type: DataTypes.STRING,
			
		}, year: {
			type: DataTypes.INTEGER,
			
		},condition: {
			type: DataTypes.STRING,
			
		}, pricePaid: {
			type: DataTypes.DOUBLE,
			
		}, currentValue: {
			type: DataTypes.DOUBLE,
			
		}, forSale: {
			type: DataTypes.BOOLEAN,
		}
	})

	Comic.sync({force: true}).then( () => {
		console.log('synced table')
	})

	return Comic
}
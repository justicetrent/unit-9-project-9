module.exports = (sequelize, DataTypes) => {
    const Course = sequelize.define('course',
    {
        id: {
            tpye: DataType.Integer,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataType.String,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'Course.title property is required' }
            },

        },
        description: {
            type: DataType.Text,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'Course.description property is required' }
            }
        },
        estimatedTime: {
            DataType: String,
            allowNull:true
        },
        materialsNeeded: {
            DataType: String,
            allowNull: true
        }
        })
    //Associations
    user.associate = models => {
        user.belongsTo(models.courses)
    }
    return Course
}
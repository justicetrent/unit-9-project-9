module.exports = (sequelize, DataTypes) => {
    const Course = sequelize.define('course',
    {
        id: {
            tpye: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'Course.title property is required' }
            },

        },
        description: {
            type: DataType.TEXT,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'Course.description property is required' }
            }
        },
        estimatedTime: {
            type: DataType.STRING,
            allowNull: true
        },
        materialsNeeded: {
            type: DataType.STRING,
            allowNull: true
        }
        })
    //Associations
    user.associate = models => {
        user.belongsTo(models.courses)
    }
    return Course
}
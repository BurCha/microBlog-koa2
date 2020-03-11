/**
 * @description 数据模型入口文件
 */

const User = require('./User')
const Blog = require('./Blog')
const UserRelation = require('./UserRelation')

// 外键添加在父关联对象中 Blog
// 创建当前模型（源）到目标模型之间的关系，外键会被添加到源模型中。
Blog.belongsTo(User, {
  foreignKey: 'userId'
})

// 外键添加在子关联对象中 Blog
// 创建当前模型（源）到目标模型之间的 1:m 的关系，外键会被添加到目标模型中。
User.hasMany(Blog, {
  foreignKey: 'userId'
})


// 创建当前模型（源）到目标模型之间的关系，外键会被添加到源模型中。
// 一个用户ID 被 多个用户信息关注
//  把多个用户信息用 where 限制成唯一确切用户信息 ，可以用来获取我关注了谁
UserRelation.belongsTo(User, {
  foreignKey: 'followerId'
})

// 创建当前模型（源）到目标模型之间的 1:m 的关系，外键会被添加到目标模型中。
// 一个用户信息 关注 多个用户ID   
// 把多个用户ID用 where 限制成唯一确切用户ID ，可以用来获取谁关注了我
User.hasMany(UserRelation, {
  foreignKey: 'userId'
})

module.exports = {
  User,
  Blog,
  UserRelation
}
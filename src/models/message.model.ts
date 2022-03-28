import { i18n } from '@/loaders/i18n'
import {
  AllowNull,
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt
} from 'sequelize-typescript'

@Table({
  timestamps: true,
  paranoid: true,
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  freezeTableName: true,
  tableName: 'Messages'
})
export class Message extends Model {
  @PrimaryKey
  @Column({
    defaultValue: DataType.UUIDV4
  })
  messageId: string

  @AllowNull(false)
  @Column({
    type: DataType.STRING(150),
    validate: {
      notNull: {
        msg: i18n.__('errors.required_field', i18n.__('labels.message'))
      }
    }
  })
  message: string

  @AllowNull(false)
  @Column({ defaultValue: false })
  isRead: boolean

  @CreatedAt
  createdAt: Date

  @UpdatedAt
  updatedAt: Date

  @DeletedAt
  deletedAt: Date
}

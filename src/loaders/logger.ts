import winston from 'winston'

export default () => {
  let transports: any = [
    new winston.transports.File({
      filename: 'log/errors.log',
      level: 'error'
    }),
    new winston.transports.File({ filename: 'log/info.log', level: 'info' }),
    new winston.transports.Console({
      format: winston.format.simple()
    })
  ]

  winston.configure({
    level: 'info',
    format: winston.format.combine(
      winston.format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss'
      }),
      winston.format.json()
    ),
    defaultMeta: { service: 'api-service' },
    transports: transports
  })
}

# Host: localhost  (Version: 5.5.53)
# Date: 2017-11-10 16:25:32
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "address"
#

DROP TABLE IF EXISTS `address`;
CREATE TABLE `address` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `province` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `area` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `userId` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='地址';

#
# Data for table "address"
#

/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (1,'张三','13612345678','河南','郑州','高新区','云和','1','1');
/*!40000 ALTER TABLE `address` ENABLE KEYS */;

#
# Structure for table "carts"
#

DROP TABLE IF EXISTS `carts`;
CREATE TABLE `carts` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `goodsId` varchar(255) DEFAULT NULL COMMENT '商品id',
  `number` varchar(255) DEFAULT NULL COMMENT '数量',
  `userId` varchar(255) DEFAULT NULL COMMENT '用户id',
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='购物车';

#
# Data for table "carts"
#

/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
INSERT INTO `carts` VALUES (1,'1','3','1');
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;

#
# Structure for table "category"
#

DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `categoryName` varchar(255) DEFAULT NULL COMMENT '类别名称',
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COMMENT='类别';

#
# Data for table "category"
#

/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'少女心饰'),(2,'萌萌美物'),(3,'为爱停留'),(4,'潮流时尚'),(5,'科技达人'),(6,'幸福烙印'),(7,'爱情保鲜');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;

#
# Structure for table "comment"
#

DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(255) DEFAULT NULL COMMENT '评论内容',
  `goodsId` varchar(255) DEFAULT NULL COMMENT '商品Id',
  `userId` varchar(255) DEFAULT NULL COMMENT '评论人',
  `images` varchar(255) DEFAULT NULL COMMENT '图片路径',
  `level` varchar(255) DEFAULT NULL COMMENT '商品评价等级',
  `time` varchar(255) DEFAULT NULL COMMENT '评价时间',
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='评论表';

#
# Data for table "comment"
#

/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (1,'质量不错','1','1',NULL,NULL,NULL);
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;

#
# Structure for table "goods"
#

DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL COMMENT '商品名称',
  `describe` varchar(255) DEFAULT NULL COMMENT '描述',
  `price` varchar(255) DEFAULT NULL COMMENT '单价',
  `images` varchar(255) DEFAULT NULL COMMENT '商品图片',
  `number` varchar(255) DEFAULT NULL COMMENT '库存量',
  `sales` varchar(255) DEFAULT NULL COMMENT '销量',
  `categoryId` varchar(255) DEFAULT NULL COMMENT '类别Id',
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='商品表';

#
# Data for table "goods"
#

/*!40000 ALTER TABLE `goods` DISABLE KEYS */;
INSERT INTO `goods` VALUES (1,'爱心感温杯','Heart Tea。当你拿起茶杯，杯身上的略微凸出的心形就会闪烁迷人的颜色！蓝色，表示水温为0～35度；橘色，表示水温为35～75度；红色则表示温度在75~90度以上，提醒你慢慢喝，不然会烫口！','110',NULL,'100','50','3');
/*!40000 ALTER TABLE `goods` ENABLE KEYS */;

#
# Structure for table "history"
#

DROP TABLE IF EXISTS `history`;
CREATE TABLE `history` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `goodsId` varchar(255) DEFAULT NULL COMMENT '商品Id',
  `userId` varchar(255) DEFAULT NULL COMMENT '用户Id',
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='浏览历史';

#
# Data for table "history"
#

/*!40000 ALTER TABLE `history` DISABLE KEYS */;
INSERT INTO `history` VALUES (1,'1','1');
/*!40000 ALTER TABLE `history` ENABLE KEYS */;

#
# Structure for table "like"
#

DROP TABLE IF EXISTS `like`;
CREATE TABLE `like` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `goodsId` varchar(255) DEFAULT NULL COMMENT '商品Id',
  `userId` varchar(255) DEFAULT NULL COMMENT '用户Id',
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='猜你喜欢';

#
# Data for table "like"
#

/*!40000 ALTER TABLE `like` DISABLE KEYS */;
/*!40000 ALTER TABLE `like` ENABLE KEYS */;

#
# Structure for table "question"
#

DROP TABLE IF EXISTS `question`;
CREATE TABLE `question` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `question` varchar(255) DEFAULT NULL COMMENT '问题',
  `answer` varchar(255) DEFAULT NULL COMMENT '回复',
  `goodsId` varchar(255) DEFAULT NULL COMMENT '商品id',
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='商品咨询';

#
# Data for table "question"
#

/*!40000 ALTER TABLE `question` DISABLE KEYS */;
/*!40000 ALTER TABLE `question` ENABLE KEYS */;

#
# Structure for table "users"
#

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `level` varchar(255) DEFAULT '0',
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

#
# Data for table "users"
#

/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'张三','13612345678','abc123456','1234567@qq.com','0'),(2,'李四','16352364582','qwe123456','5326535@qq.com','0'),(5,'张三','13526352365','qwer12345',NULL,'0'),(6,'张三','13526352364','qwer12345',NULL,'0'),(7,'王五','16564345685','sss123456','qwe123@qq.com','0'),(8,'张三','13526352366','qwer12345',NULL,'0'),(9,'张三','13526352367','qwer12345',NULL,'0'),(10,'张三','13562635636','qwer12345',NULL,'0'),(11,'USER10','13526352368','qwer12345',NULL,'0'),(12,'USER11','13526352369','qwer12345',NULL,'0'),(13,'USER12','13526352975','qwer12345',NULL,'0'),(14,'USER14','13526368365','qwer12345',NULL,'0'),(15,'USER15','13526352865','qwer12345',NULL,'0'),(16,'USER16','135263623565','qwer12345',NULL,'0'),(17,'USER17','13561356643','qwe1234',NULL,'0'),(18,'USER18','15364953694','qwe123',NULL,'0');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

window.context = {
"@context": {
  "@base": "http://www.sap.com/samhengi/",
  "samhengi": "http://www.sap.com/ns/samhengi#",
  "horizon": "http://www.sap.com/ns/horizon/core#",
  "schema": "http://schema.org/",
  "id": "@id",
  "user": "horizon:userID",
  "name": "schema:name",
  "exchange": "samhengi:exchange",
  "symbol": "samhengi:symbol",
  "criteria": "samhengi:criteria",
  "operator": "samhengi:operator",
  "stocks": "samhengi:stocks",
  "tweets": "samhengi:tweets",
  "situationDescriptions": {
    "@id": "samhengi:situationDescriptions",
    "@container": "@set"
  },
  "about": "horizon:about",
  "user": "horizon:user",
  "assignedTo": "horizon:assignedTo",
  "dateCreated": "horizon:dateCreated",
  "Issue": "horizon:Issue",
  "StockAnomaly": "samhengi:StockAnomaly",
  "TweetAnomaly": "samhengi:TweetAnomaly",
  "change": "samhengi:change",
  "topics": {
    "@id": "samhengi:topics",
    "@container": "@set"
  },
  "periodNumber": { "@id": "samhengi:periodNumber",
                    "@type": "xsd:integer"
                  },
  "periodUnit": { "@id": "samhengi:periodUnit",
                  "@type": "xsd:integer"
                },
  "period": { "@id": "samhengi:period",
              "@type": "xsd:duration"
            },
  "every": { "@id": "samhengi:every",
             "@type": "xsd:duration"
           },
  "tweetNumber": { "@id": "samhengi:tweetNumber",
                   "@type": "xsd:integer"
                 },
  "tweetOperator": "samhengi:tweetOperator",
  "enabled": { "@id": "samhengi:enabled",
               "@type": "xsd:boolean"
             },
  "stockChangeDirection": "samhengi:stockChangeDirection",
  "stockChangeAmount": { "@id": "samhengi:stockChangeAmount",
                         "@type": "xsd:float"
                       },
  "stockChangeUnit": "samhengi:stockChangeUnit",
  "keywords": {
    "@id": "samhengi:keywords",
    "@container": "@set"
  },
  "hashtags": {
    "@id": "samhengi:hastags",
    "@container": "@set"
  },
  "users": {
    "@id": "samhengi:users",
    "@container": "@set"
  }
}
}

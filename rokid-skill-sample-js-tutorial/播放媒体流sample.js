{
    "intents": [
        {
            "intent": "MediaRequest",
            "slots": [],
            "user_says": [
                "播放"
            ]
        }
    ]
}

//以上为语音交互配置

exports.handler = function (event, context, callback) {
    var rokid = Rokid.handler(event, context, callback);
    rokid.registerHandlers(handlers);
    rokid.execute();
};

var handlers = {
    'MediaRequest': function () {
        try {
            this.setMedia({ type: 'AUDIO', url: 's.rokidcdn.com/temp/rokid-ring.mp3' });
            this.emit(':done');
        } catch (error) {
            this.emit(':error', error);
        }
    }
};

//以上为js脚本demo
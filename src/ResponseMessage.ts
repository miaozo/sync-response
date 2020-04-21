/**
 * 响应消息
 */
export class ResponseMessage {

    /**
     * 请求ID
     * @type {string}
     */
    requestId: string;

    /**
     * 响应文本
     * @type {string}
     */
    responseText: string;

    /**
     * 响应时长(毫秒)
     * @type {number}
     */
    responseTime: number;

    /**
     *
     * @param {string} requestId 请求ID
     * @param {string} responseText 响应文本
     * @param {number} [responseTime] 响应时长(毫秒)
     */
    constructor(requestId: string, responseText: string, responseTime?: number) {
        this.requestId = requestId;
        this.responseText = responseText;
        this.responseTime = responseTime ? responseTime : 0;
    }

    /**
     * 消息字符串[requestId,responseText]
     * @return {string}
     */
    toMessageString(): string {
        return JSON.stringify([this.requestId, this.responseText]);
    }

    /**
     * 把消息字符串转换为响应消息
     * @param {string} message 消息字符串
     * @return {ResponseMessage}
     */
    static fromMessageString(message: string) : ResponseMessage {
        let array = JSON.parse(message);
        return new ResponseMessage(array[0], array[1]);
    }
}

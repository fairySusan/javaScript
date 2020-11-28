/** 全局事件总栈 */
const eventObj: any = {
};
/**
 * @description 事件总栈工具类
 */
export class EventUtil {
    // 事件注册
    static on(eventName: string, func: Function){
        if(eventObj[eventName]){
            eventObj[eventName].push(func)
        }else{
            eventObj[eventName] = [func]
        }
    }
    // 事件触发
    static emit(eventName: string, ...rest: any[]){
        let funcs: Function[] = eventObj[eventName]
        if(funcs){
            funcs.forEach((fun) => {
                fun(...rest)
            })
        }
    }
    // 事件移除
    static remove(eventName: string, func?: Function){
        if(!func){
            eventObj[eventName] = [];
            return;
        }
        let funcs: Function[] = eventObj[eventName]
        if(funcs){
            funcs.forEach((fun, idx) => {
                if(fun === func){
                    eventObj[eventName].splice(idx, 1)
                }
            })
        }
    }
}

export enum EventKeys{
    workFlowSubmit = 'workFlowSubmit'
}

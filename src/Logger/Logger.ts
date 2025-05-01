enum LOG_LEVEL {
    ERROR = 1,
    DEBBUG = 2
}

export function logf(logLevel: LOG_LEVEL | number, logMessage: string) {
    switch (logLevel) {
        case LOG_LEVEL.ERROR:
            console.error("LOGGER [" + LOG_LEVEL[logLevel] + "]" + "::" + logMessage);
            break;

        case LOG_LEVEL.DEBBUG:
        default:
            console.debug("LOGGER [" + LOG_LEVEL[logLevel] + "]" + "::" + logMessage);
            break;
    }
}
class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }
        this.keyStore.get(key).push({ timestamp, value });
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!this.keyStore.has(key)) return "";

        const entries = this.keyStore.get(key);
        let result = "";

        for (let entry of entries) {
            if (entry.timestamp <= timestamp) {
                result = entry.value;
            } else {
                break;
            }
        }
        return result;
    }
}

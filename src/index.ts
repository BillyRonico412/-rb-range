export default {
    /**
     *
     * Generate a range number like python.
     *
     * @param {number} [start]
     * @param {number} [end]
     * @param {number} [step]
     *
     * @returns {number[]}
     *
     * */
    range(start?: number, end?: number, step?: number): number[] {
        if (start === undefined) {
            return [];
        } else if (end === undefined) {
            if (start < 0) {
                return [];
            } else {
                const res = [];
                for (let i = 0; i < start; i++) {
                    res.push(i);
                }
                return res;
            }
        } else if (step === undefined) {
            if (start > end) {
                return [];
            } else {
                const res = [];
                for (let i = start; i < end; i++) {
                    res.push(i);
                }
                return res;
            }
        } else {
            if (start > end || step <= 0) {
                return [];
            } else {
                const res = [];
                for (let i = start; i < end; i += step) {
                    res.push(i);
                }
                return res;
            }
        }
    },
};

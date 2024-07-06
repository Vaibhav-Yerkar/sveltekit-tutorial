import {
    SmartContract,
    assert,
    method,
    prop,
} from 'scrypt-ts'

export class Multiplier extends SmartContract {
    @prop()
    product: bigint

    constructor(pd: bigint) {
        super(...arguments)
        this.product = pd
    }

    @method()
    public unlock(num1: bigint, num2:bigint) {
        assert(num1 * num2 == this.product, 'incorrect multipliers')
    }
}

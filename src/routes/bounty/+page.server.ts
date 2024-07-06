// import { Root } from '../../contracts/root';
import { DefaultProvider, bsv } from 'scrypt-ts'
import { NeucronSigner } from 'neucron-signer'

const provider = new DefaultProvider({ network: bsv.Networks.mainnet });
const signer = new NeucronSigner(provider);
let instance;



/** @type {import('./$types').Actions} */
export const actions = {

    deploy: async ({request}) =>{
      const data = await request.formData();

      await signer.login('sales@timechainlabs.io', 'string');
      await Root.loadArtifact();

      const square = BigInt(data.get('square'))
      instance = new Root(square)
      await instance.connect(signer)
      const deployTx = await instance.deploy(data.get('bounty'));
      console.log(
          'smart lock deployed : https://whatsonchain.com/tx/' + deployTx.id
      );
      return { success: true, tx: deployTx.id};
    },

    unlock: async({request})=>{
      const data = await request.formData();

      const root = data.get('root');
      // await new Promise((f) => setTimeout(f, 5000))
      const { tx: callTx } = await instance.methods.unlock(root)
      console.log(
          'contract unlocked successfully : https://whatsonchain.com/tx/' +
              callTx.id
      );
      return { success: true, tx: callTx.id};
    }
};
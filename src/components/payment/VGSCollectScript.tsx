import { loadVGSCollect } from '@vgs/collect-js';
import { VGSCollectVaultEnvironment } from '@vgs/collect-js-react';
import { useEffect } from 'react';

const vgsVersion = '2.18.0';
const vgsVaultId = 'tntiodlvy7l';
const vgsEnvironment = 'sandbox';

interface VGSCollectScriptProps {
  vgsVaultId?: string;
  vgsEnvironment?: VGSCollectVaultEnvironment;
  vgsVersion?: string;
  onError?: (error: any) => unknown;
  onLoaded?: () => unknown;
}

export const VGSCollectScript: React.FC<VGSCollectScriptProps> = (props) => {
  useEffect(() => {
    (async () => {
      try {
        await loadVGSCollect({
          vaultId: props.vgsVaultId || vgsVaultId,
          environment: props.vgsEnvironment || vgsEnvironment,
          version: props.vgsVersion || vgsVersion
        });
        props.onLoaded?.();
      } catch (error) {
        props.onError?.(error);
      }
    })();
  }, []);

  return null;
};

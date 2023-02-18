import { useFrame } from 'lib/react-three/fiber'
import { useGLTF, type GLTF } from 'lib/react-three/drei'
import { Asset } from 'expo-asset'

const asset = Asset.fromModule(require('@assets/models/iphone.glb'))

export default function IPhone(props: any) {
  const { scene } = useGLTF(asset.uri) as GLTF

  useFrame(() => {
    scene.rotation.y += 0.01
  })

  return <primitive {...props} object={scene} />
}

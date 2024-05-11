import { motion } from "framer-motion"
export const Card = ({whileHover, whileFocus, whileTap, img, color, width, height, padding, marginX, marginY,initial,whileInView,transition, imgSize, animate, whileDrag, children, className }) => {
    return (
        <>
            <motion.div
                initial={initial? initial: null}
                whileInView={whileInView? whileInView: null}
                animate={animate? animate: null}
                whileDrag={whileDrag? whileDrag: null}
                whileTap={whileTap? whileTap : null}
                whileFocus={whileFocus? whileFocus : null}
                whileHover={whileHover? whileHover : null}
                transition={transition? transition: null}
                className={className}
                style={img ? {
                    background: `url(${img})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: imgSize,
                    backgroundPozition: "center"
                } : {
                    background: `${color ? color : null}`,
                    width: `${width ? width : 0}rem`,
                    height: `${height ? height : 0}rem`,
                    padding: padding ? `${padding}px` : null,
                    marginLeft: marginX && marginX === `auto` ? `${marginX ? marginX : 0}` : `${marginX ? marginX : 0}rem`,
                    marginRight: marginX && marginX === `auto` ? `${marginX ? marginX : 0}` : `${marginX ? marginX : 0}rem`,
                    marginTop: `${marginY ? marginY : 0}px`,
                    marginBottom: `${marginY ? marginY : 0}px`,
                    borderRadius: "10px"
                }}>
                {children ? children : null}
            </motion.div>
        </>
    )
}